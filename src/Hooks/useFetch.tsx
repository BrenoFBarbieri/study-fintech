import React from "react";
export default function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit
) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const optionsRef = React.useRef(options);
  optionsRef.current = options;
  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async function () {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (err) {
        if (!signal.aborted && err instanceof Error) setError(err.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
}
