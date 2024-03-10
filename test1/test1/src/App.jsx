//props allow parent component to send data to child component
import Student from "./student";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={35} isStudent={false} />
      <Student name="Squidward" age={40} isStudent={false} />
      <Student name="Sandy" age={35} isStudent={true} />
    </>
  );
}
export default App;
