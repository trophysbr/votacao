import React from "react";
import { useState, useEffect, useRef } from 'react'
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Trophy, Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBook, FaStar, FaTrophy } from 'react-icons/fa'; // Importando ícones do React Icons
import { FaUserCircle } from 'react-icons/fa' // Usando um ícone de avatar, como FaUserCircle
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'



const recentGames = [
  { title: "God of War Ragnarök", status: "Jogando - 45h", image: "/images/gow.jpg" },
  { title: "Elden Ring", status: "Concluído - 98h", image: "/images/eldenring.jpg" },
  { title: "Cyberpunk 2077", status: "Jogando - 23h", image: "/images/cyberpunk.jpg" },
  { title: "Final Fantasy XVI", status: "Na fila", image: "/images/ffxvi.jpg" },
];

export default function Dashboard() {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const supabase = useSupabaseClient();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    // Verifique se o usuário está autenticado ao carregar a página
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // Se não houver sessão, redirecione para a página de login
        router.push('/auth/login');
      }
    };

    checkSession(); // Chama a função para verificar a sessão

  }, [supabase, router]); // Rodar novamente quando o supabase ou o router mudar

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

   // Função para fechar o menu ao clicar fora
   const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    // Adiciona o ouvinte de evento no document
    document.addEventListener('click', handleClickOutside)

    // Limpa o ouvinte quando o componente for desmontado
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

   // Função para navegar para a página de dashboard
   const navigateToDashboard = () => {
    setMenuOpen(false)
    router.push('/dashboardGamer')  // Direciona para a página dashboardGamer
  }

   // Função para fazer logout
   const handleLogout = async () => {
    setMenuOpen(false)
    await supabase.auth.signOut()  // Encerra a sessão
    router.push('auth/login')  // Redireciona para a página de login
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center gap-2">
            <Trophy className="text-purple-400" /> Trophys
        </h1>
        <div className="flex items-center gap-4 relative">
            <Bell className="cursor-pointer" />
            
            {/* Avatar e Menu Dropdown */}
            <div className="relative" ref={menuRef}>
            <FaUserCircle
                className="w-8 h-8 text-gray-700 cursor-pointer"
                onClick={toggleMenu} // Alterna a visibilidade do menu ao clicar
            />
            {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                <ul>
                    <li
                    className="hover:bg-purple-600 px-4 py-2 cursor-pointer"
                    onClick={navigateToDashboard}  // Navega para a página de dashboard
                    >
                    Home
                    </li>
                    <li className="hover:bg-purple-600 px-4 py-2 cursor-pointer">Biblioteca</li>
                    <li className="hover:bg-purple-600 px-4 py-2 cursor-pointer">Desafios</li>
                    <li className="hover:bg-purple-600 px-4 py-2 cursor-pointer">Conquistas</li>
                    <li
                    className="hover:bg-purple-600 px-4 py-2 cursor-pointer"
                    onClick={handleLogout}  // Realiza o logout
                    >
                    Logout
                    </li>
                </ul>
                </div>
            )}
            </div>
        </div>
    </header>

      {/* Welcome Section */}
      <section className="mt-6 flex justify-between items-center">
        <h2 className="text-lg">Bem-vindo de volta, Jogador</h2>
        <div className="flex gap-2 items-center ml-auto"> {/* Adiciona ml-auto para alinhar à direita */}
            <Badge className="bg-purple-600">Nível 42</Badge>
            <span className="text-sm text-gray-400">XP: 12,450</span>
        </div>
        </section>

      {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6">
        {["Biblioteca", "Desafios", "Conquistas"].map((title, index) => (
            <Card key={index} className="bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-2"> {/* Flex e justify-between para distribuir os itens */}
                <h3 className="text-lg font-semibold">{title}</h3>
                {/* Ícone ao lado do nome */}
                {title === "Biblioteca" && (
                <FaBook className="w-6 h-6 text-purple-500" /> // Ícone de livro para a Biblioteca
                )}
                {title === "Desafios" && (
                <FaStar className="w-6 h-6 text-purple-500" /> // Ícone de estrela para Desafios
                )}
                {title === "Conquistas" && (
                <FaTrophy className="w-6 h-6 text-purple-500" /> // Ícone de troféu para Conquistas
                )}
            </div>
            <p className="text-2xl font-bold">{[124, 8, 847][index]}</p>
            <span className="text-gray-400">{["Jogos na coleção", "Desafios ativos", "Troféus desbloqueados"][index]}</span>
            </Card>
        ))}
        </div>

    {/* Jogos Recentes - Carrossel */}
        <section className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Jogos Recentes</h3>
        <Slider {...settings} className="!space-x-2"> {/* Diminui o espaço entre os slides */}
            {recentGames.map((game) => (
            <div key={game.title} className="flex justify-center">
                <Card className="bg-gray-800 p-2 w-44"> {/* Ajusta o tamanho do card */}
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-32 object-cover rounded-md mb-2" // Ajuste a largura da imagem aqui
                />
                <h4 className="text-md font-bold">{game.title}</h4>
                <span className="text-sm text-gray-400">{game.status}</span>
                </Card>
            </div>
            ))}
        </Slider>
        </section>

    {/* Desafios Ativos */}
    <section className="mt-6">
    <h3 className="text-lg font-semibold mb-4">Desafios Ativos</h3>
    
    {/* Configuração do Carrossel */}
    <Slider {...settings} className="!space-x-2"> {/* Usando o Slider com espaço entre os slides */}
        {["Speedrun - Resident Evil 4", "100% - Hollow Knight", "100% - Elden Ring"].map((challenge, index) => {
        // Ajuste das dificuldades conforme solicitado
        const difficulty = index === 0 ? "Difícil" : index === 1 ? "Expert" : "Médio"; 
        
        // Cores conforme a dificuldade
        const difficultyColor = 
            difficulty === "Expert" ? "bg-red-500" : 
            difficulty === "Difícil" ? "bg-yellow-800" : 
            difficulty === "Médio" ? "bg-yellow-400" : 
            "bg-green-500"; // Cores para cada dificuldade

        return (
            <div key={index} className="flex justify-center">
            <Card className="bg-gray-800 p-4 w-60">
                {/* Desafio e Dificuldade na mesma linha */}
                <div className="flex justify-between items-center">
                <h4 className="font-bold">{challenge}</h4>
                <span className={`${difficultyColor} text-white px-2 py-1 rounded-full text-sm`}>
                    {difficulty}
                </span>
                </div>
                
                {/* Barra de progresso com espaçamento superior */}
                <div className="mt-6"> {/* Aumentando o espaçamento entre o nome e a barra de progresso */}
                <Progress value={[75, 90, 50][index]} />
                </div>
                
                <span className="text-gray-400 mt-2">{["2 dias restantes", "5 dias restantes", "20 dias restantes"][index]}</span>
            </Card>
            </div>
        );
        })}
    </Slider>
    </section>


    {/* Conquistas Recentes */}
    <section className="mt-6">
    <h3 className="text-lg font-semibold mb-4">Conquistas Recentes</h3>
    <div className="grid grid-cols-4 gap-4">
        {["Lendário", "Explorador", "Mestre das Armas", "Platina"].map((achievement, index) => (
        <Card key={index} className="bg-gray-800 p-4 flex items-center justify-start"> {/* Garantir que seja flex e alinhado */}     
            {/* Imagem do troféu à esquerda */}
            <img 
            src="/images/trophy-icon.png" // Caminho para a imagem do troféu
            alt="Troféu" 
            className="w-8 h-8 object-contain mr-3" // Ajuste do tamanho da imagem e margem à direita
            />
            {/* Nome da conquista */}
            <span className="text-md text-white">{achievement}</span>
        </Card>
        ))}
    </div>
    </section>




      {/* Footer */}
      <footer className="mt-6 text-gray-500 text-sm text-center">
        © 2025 Trophys • <a href="#" className="underline">Termos</a> • <a href="#" className="underline">Privacidade</a>
      </footer>
    </div>
  );
}
