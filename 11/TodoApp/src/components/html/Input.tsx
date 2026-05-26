// <input>의 기본 속성들으 가져온 뒤, type만 제거하고 다시 "text"만 허용
type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {type?: "text"};

export default function Input(props: InputProps) {
    const { ... rest } = props;

    return <input {...rest} />
}