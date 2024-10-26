import "./Button.css";
//add props to button
function Button({ game }: { game: string }) {
  return (
    <>
      <div className="card">
        <a
          href="https://oskarstalberg.com/Townscaper/#GSB0RARueC6Snc9E0lO5B"
          target="_blank"
        >
          <button className="button">Try {game}!</button>
        </a>
      </div>
    </>
  );
}

export default Button;
