import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import logo from "@/assets/img/logo/white-logo.svg"

interface MobileSidebarProps {
  isSearch: boolean;
  setIsSearch: (isSearch: boolean) => void;
}

const HeaderSearch = ({ isSearch, setIsSearch }: MobileSidebarProps) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue('');
    setIsSearch(false);
  };

  return (
    <>
      <div className={`search_popup ${isSearch ? "search-opened" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="search_wrapper">
                <div className="search_top d-flex align-items-center">
                  <div className="search_logo">
                    <Link href="/">
                      <Image src={logo} alt="img" />
                    </Link>
                  </div>
                  <div className="search_close">
                    <button onClick={() => setIsSearch(false)} type="button" className="search_close_btn">
                      <i className="fa-thin fa-times"></i>
                    </button>
                  </div>
                </div>
                <div className="search_form">
                  <form onSubmit={handleSubmit}>
                    <div className="search_input">
                      <input
                        type="text"
                        placeholder="Type here to search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="search-input-field"
                      />
                      <span className="search-focus-border"></span>
                      <button type="submit">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setIsSearch(false)} className={`search-popup-overlay ${isSearch ? "search-popup-overlay-open" : ""}`}></div>
    </>
  )
}

export default HeaderSearch