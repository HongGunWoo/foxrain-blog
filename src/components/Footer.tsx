import ContactList from './ContactList';

export default function Footer() {
  return (
    <footer>
      <div className="my-7 space-y-1 text-gray-400">
        <div className="flex items-center justify-center gap-5">
          <ContactList />
        </div>
        <div className="text-center text-sm font-semibold transition-colors duration-300 hover:text-black">
          foxrain.dev | devlog by Hong GunWoo
        </div>
      </div>
    </footer>
  );
}
