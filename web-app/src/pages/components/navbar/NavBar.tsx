import './navbar.css';

interface Link {
  name: string;
  url: string;
}

export const NavLinks: Link[] = [
  { name: "Meus Produtos", url: "/products" },
  { name: "Categorias", url: "/supplier/categories" },
  { name: "Promoções", url: "/promotions/" },
  { name: "Cadastro de Fornecedores", url: "/supplier/register" },
];

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        {NavLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

