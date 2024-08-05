import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);
  const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes));
  const mostVotedAnecdote = anecdotes[mostVotedAnecdoteIndex];
  const mostVotedAnecdoteVotes = votes[mostVotedAnecdoteIndex];

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>
          {anecdotes[selected]} <br /> <em>has {votes[selected]} votes</em>
        </p>
      </div>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next Anecdote
      </button>
      <button onClick={handleVotes}>Vote</button>

      <div>
        <h2>Most Voted Anecdote</h2>
        <p>
          {mostVotedAnecdote} <br />
          <em>has {mostVotedAnecdoteVotes} votes</em>
        </p>
      </div>
    </div>
  );
};

export default App;
