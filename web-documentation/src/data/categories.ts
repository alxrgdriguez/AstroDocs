export interface Category {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  slug: string;
  icon: string;
}

export const categories: Category[] = [
  {
    title: "Docker",
    slug: "docker",
    description: "Comandos útiles para Docker",
    category: "DevOps",
    categoryColor: "bg-blue-600",
    icon: "/images/docker.svg",
  },
  {
    title: "Github",
    slug: "github",
    description: "Comandos útiles para GitHub",
    category: "Control de versiones",
    categoryColor: "bg-green-600",
    icon: "/images/github.svg",
  },
  {
    title: "MySQL",
    slug: "mysql",
    description: "Guía y comandos esenciales para MySQL",
    category: "Bases de datos",
    categoryColor: "bg-red-600",
    icon: "/images/mysql.svg",
  },
  {
    title: "MariaDB",
    slug: "mariadb",
    description: "Configuración y comandos para MariaDB",
    category: "Bases de datos",
    categoryColor: "bg-red-600",
    icon: "/images/mariadb.svg",
  },
  {
    title: "Node.js",
    slug: "nodejs",
    description: "Guía y comandos para Node.js",
    category: "Backend",
    categoryColor: "bg-yellow-600",
    icon: "/images/nodejs.svg",
  },
  {
    title: "Python",
    slug: "python",
    description: "Guía y comandos para Python",
    category: "Backend",
    categoryColor: "bg-yellow-600",
    icon: "/images/python.svg",
  },
  {
    title: "React",
    slug: "react",
    description: "Guía y comandos para React",
    category: "Frontend",
    categoryColor: "bg-purple-600",
    icon: "/images/react.svg",
  },
  {
    title: "VueJS",
    slug: "vuejs",
    description: "Guía y comandos para VueJS",
    category: "Frontend",
    categoryColor: "bg-purple-600",
    icon: "/images/vue.svg",
  },
];
