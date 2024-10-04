import logo from "./../assets/Images/logo.png"
export default function Header() {
  return (
    <div>
      <img src={logo} className="w-[80px] object-cover" alt="" />
    </div>
  );
}
