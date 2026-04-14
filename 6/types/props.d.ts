type btnCfgs = {
    value: string;
    className: string;
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

type CalcState = {
  currentNum: string;
  prevNum: string;
  operator: null | string;
  isNewNum: boolean;
}