const Button = ({ onClick, href, children }) => {
  const style = {
    backgroundColor: "skyblue",
    border: "none",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    lineHeght: 1,
  };

  if (onClick) {
    return (
        <button type="button" onClick={onClick}
        style={style}>
        {children}
        </button>
    );
  }

  if (href) {
    return (
        <a href={href} style={style}>
            {children}
        </a>
    );
  }
};

const App = () => {
    const handleClick = () => {
        alert("button要素がクリックされました");
    };

    const href = "https://ja.react.dev/";

    return (
        <>
        <Button onClick={handleClick}>ボタン</Button>
        <Button href={href}>リンク</Button>
        </>
    );
};

export default App;
