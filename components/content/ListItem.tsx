import { ReactNode } from "react";

interface ListItemProps {
  icon: string;
  title?: string;
  children: ReactNode;
}

export default function ListItem({ icon, title, children }: ListItemProps) {
  return (
    <li className="flex items-start">
      <span className="text-[#b49900] mr-3 text-2xl">{icon}</span>
      <div>
        {title && (
          <>
            <strong>{title}</strong>
            <br />
          </>
        )}
        {children}
      </div>
    </li>
  );
}
