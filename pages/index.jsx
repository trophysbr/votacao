import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/auth/login"); // Redireciona para a página de login
    }, []);

    return null; // Evita exibir algo na tela antes do redirecionamento
}
