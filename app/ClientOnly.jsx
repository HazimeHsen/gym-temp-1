"use client";
import { useState, useEffect } from "react";
import PageLoading from "./PageLoading";

const ClientOnly = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? <PageLoading /> : <>{children}</>;
};

export default ClientOnly;
