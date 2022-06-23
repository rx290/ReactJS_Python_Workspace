import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="icon navbar_left">
            <i className="icon fa-brands fa-facebook-square"></i>
            <i className="icon fa-brands fa-instagram-square"></i>
            <i className="icon fa-brands fa-linkedin"></i>
            <i className="icon fa-brands fa-github-square"></i>
            </div>
            <div className="navbar_center">
                <ul className="navbar_list">
                    <li className="navbar_list_item">Home</li>
                    <li className="navbar_list_item">About</li>
                    <li className="navbar_list_item">Contact</li>
                    <li className="navbar_list_item">Write</li>
                </ul>
            </div>
            <div className="navbar_right">
                <img className="navbar_image" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile Picture" />
                <i className="searchIcon fas fa-search"></i>            </div>
        </div>
    );
}
 
export default Navbar;