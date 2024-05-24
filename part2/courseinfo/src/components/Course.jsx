const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    Name: {part.name}, Number: {part.exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <h4>Total of {total} exercises</h4>;
};

export const Course = ({ course }) => {
  return (
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
  )
}
