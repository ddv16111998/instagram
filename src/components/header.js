import '../public/css/header.css';
import iconInstagram from '../public/images/icon-instagram.png'
import avatarNone from '../public/images/avatar_none.png'
function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="icon-logo col-md-4">
                        <img src={iconInstagram} alt="logo-instagram"/>
                    </div>
                    <div className="search col-md-4">
                        <svg aria-label="Search" className="icon-search" color="#8e8e8e" fill="#8e8e8e" height="16"
                             role="img" viewBox="0 0 24 24" width="16">
                            <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
                                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"/>
                        </svg>
                        <input type="text" className="input-search" placeholder="Search"/>
                    </div>
                    <div className="list-action col-md-4">
                        <div className="home">
                            <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="24"
                                 role="img" viewBox="0 0 24 24" width="24">
                                <path
                                    d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                                    fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="redirect-message">
                            <svg aria-label="Direct" className="_8-yf5 " color="#262626" fill="#262626" height="24"
                                 role="img" viewBox="0 0 24 24" width="24">
                                <path
    d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692"
    fillRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="new-post">
                            <svg aria-label="New Post" className="_8-yf5 " color="#262626" fill="#262626" height="24"
                                 role="img" viewBox="0 0 24 24" width="24">
                                <path
                                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                                    fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"/>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"/>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"/>
                            </svg>
                        </div>
                        <div className="find-people">
                            <svg aria-label="Find People" className="_8-yf5 " color="#262626" fill="#262626" height="24"
                                 role="img" viewBox="0 0 24 24" width="24">
                                <polygon fill="none"
                                         points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                                         stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2"/>
                                <polygon fillRule="evenodd"
    points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"/>
                                <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className="activity-feed">
                            <svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626"
                                 height="24" role="img" viewBox="0 0 48 48" width="24">
                                <path
    d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>
                            </svg>
                        </div>
                        <div className="account">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img alt="profile picture" className="logo-profile" crossOrigin="anonymous"
                                 data-testid="user-avatar" draggable="false"
                                 src={avatarNone} width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
