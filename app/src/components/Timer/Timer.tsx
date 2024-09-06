type Props = {
  seconds: number;
};

const Timer = ({ seconds }: Props) => {
  return (
    <div
      style={{
        textAlign: "start",
        fontSize: 20,
        fontWeight: "bold",
        color: "whitesmoke",
        marginBottom: 15,
      }}
    >
      {seconds}
    </div>
  );
};

export default Timer;
