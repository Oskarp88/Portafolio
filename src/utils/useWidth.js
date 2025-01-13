import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Escuchar el evento 'resize'
    window.addEventListener("resize", handleResize);

    // Limpieza del efecto al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}