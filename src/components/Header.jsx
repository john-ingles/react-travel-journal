import world_icon from "../images/world_icon.svg";
export default function Header() {
  return (
    <header>
      <img src={world_icon} />
      <div>my travel journal</div>
    </header>
  );
}
