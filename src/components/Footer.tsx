import ContactList from './ContactList';

export default function Footer() {
  return (
    <footer>
      <div className="my-7 space-y-1 text-gray-300">
        <div className="flex items-center justify-center gap-5">
          <ContactList />
        </div>
        <div className="text-center text-sm font-semibold transition-colors hover:text-gray-400">
          foxrain.dev | devlog by Hong GunWoo
        </div>
      </div>
    </footer>
  );
}
