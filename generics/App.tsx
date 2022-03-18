import React from "react";

type Props<T> = {
  message: string;
  data: T[];
};

const FullName: React.FC<{ name: string; lastName: string }> = ({
  name,
  lastName,
}) => (
  <div>
    {name} {lastName}
  </div>
);

const App: React.FC<Props<number>> = ({ message, data }) => {
  return (
    <div>
      <FullName name="Victor" lastName="Jatobá">
        {message}
      </FullName>
      {data}
    </div>
  );
};

interface FormProps<T> {
  values: T;
  chuildren: (values: T) => JSX.Element;
}

const form: React.FC<FormProps<string[]>> = ({ values, chuildren }) => (
  <div>{values}</div>
);

export default App;
