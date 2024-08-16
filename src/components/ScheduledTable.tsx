import { FC, ReactNode } from "react";
import Image from "next/image";
import moment from "moment";
import { CheckMIcon, CommentS, EditUnerline, EmailS, FacebookS, TwitterS } from "./SvgIcons";

const ScheduledTable: FC = () => {
  return (
    <table className="w-full bg-white">
      <thead>
        <tr
          className=""
        >
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal px-6" align="center">
            #
          </th>
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal" align="left">Post Name</th>
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal" align="center">
            Social Platform
          </th>
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal" align="center">
            Date
          </th>
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal" align="center">
            Status
          </th>
          <th className="p-6 text-2xl font-aeonik text-secondary-600 font-normal" align="center">
            Edit
          </th>
        </tr>
      </thead>
      <tbody>
        <Row
          id={1}
          thumb="/images/demo-watch.jpg"
          title="Abstract 3D"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          social={{
            icon: <CommentS />,
            name: "Blog",
          }}
          date={new Date()}
          status="success"
        />
        <Row
          id={2}
          thumb="/images/demo-watch.jpg"
          title="Abstract 3D"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          social={{
            icon: <EmailS />,
            name: "Blog",
          }}
          date={new Date()}
          status="success"
        />
        <Row
          id={3}
          thumb="/images/demo-watch.jpg"
          title="Abstract 3D"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          social={{
            icon: <TwitterS />,
            name: "Blog",
          }}
          date={new Date()}
          status="success"
        />
        <Row
          id={4}
          thumb="/images/demo-watch.jpg"
          title="Abstract 3D"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          social={{
            icon: <FacebookS />,
            name: "Facebook",
          }}
          date={new Date()}
          status="success"
        />
      </tbody>
    </table>
  );
};

interface RowProps {
  id: number;
  thumb: string;
  title: string;
  description: string;
  social: {
    name: string;
    icon: ReactNode;
    link?: string;
  };
  date: Date;
  status: string;
}

const Row: FC<RowProps> = ({
  id,
  thumb,
  title,
  description,
  social,
  date,
  status,
}) => {
  return (
    <tr className="border-t border-secondary-600">
      <td className="font-jakarta text-sm" align="center">{id}</td>
      <td>
        <div className="flex items-center gap-6 py-6">
          <div
            className="rounded-lg overflow-hidden relative w-[96px]"
            style={{ aspectRatio: 96 / 56 }}
          >
            <Image src={thumb} fill alt="" />
          </div>
          <div className="">
            <h5 className="font-aeonik text-2xl font-medium">{title}</h5>
            <p className="font-jakarta text-xs leading-xs text-[#9197B3] font-semibold mt-1">
              {description}
            </p>
          </div>
        </div>
      </td>
      <td align="center">
        <div className="flex items-center justify-center gap-2 font-jakarta font-semibold text-xl text-primary-100">
          {social.icon}
          {social.name}
        </div>
      </td>
      <td className="font-bold text-xl leading-xl font-jakarta" align="center">
        {moment(date).format("MMM D")}
      </td>
      <td align="center">
        <div className="inline-flex rounded-lg bg-[#C8FFDC] gap-2 font-jakarta text-xl leading-xl font-semibold text-[#028A34] items-center p-2">
          <CheckMIcon /> Success
        </div>
      </td>
      <td align="center">
        <button>
          <EditUnerline />
        </button>
      </td>
    </tr>
  );
};

export default ScheduledTable;
