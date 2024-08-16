import { FC, ReactNode } from "react";

interface TopbarProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

const Topbar: FC<TopbarProps> = ({ title, description, action }) => {
  return (
    <div className="py-6 pr-[67px] pl-[14px] flex items-center justify-between border-b border-secondary-600 bg-white">
      <div className="pl-6">
        <h2 className="font-aeonik font-bold text-h4 leading-h4 text-black dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-1 font-jakarta text-l leading-l text-primary-700">
            {description}
          </p>
        )}
      </div>
      {action && <div className="">{action}</div>}
    </div>
  );
};

export default Topbar;
