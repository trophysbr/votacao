import React from "react";

// O componente Avatar é um simples círculo que pode receber uma imagem ou uma letra inicial como conteúdo.
export const Avatar = ({ src, alt, className }) => {
  // Definindo a classe padrão para o avatar
  const baseClasses = "w-12 h-12 rounded-full overflow-hidden";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={combinedClasses}>
      {/* Se a imagem do avatar (src) for fornecida, usa-se a imagem, caso contrário, uma inicial padrão */}
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="object-cover w-full h-full" />
      ) : (
        <div className="flex items-center justify-center bg-gray-700 text-white font-bold text-xl">
          {alt ? alt[0].toUpperCase() : "A"}
        </div>
      )}
    </div>
  );
};
