import { Link } from "react-router-dom";

export const FooterLink = ({ linkText, redirectLink, heading }) => {
  return (
    <div className="app_auth_not_register_link">
      <p>
        {heading} <Link href={redirectLink}>{linkText}</Link>
      </p>
    </div>
  );
};
