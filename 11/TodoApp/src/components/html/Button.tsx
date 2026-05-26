type Buttonprops = React.ComponentPropsWithRef<'button'>;
// React.ComponentsPropsWithRef
//  <button>에서 사용할 수 있는 모든 HTML 속성을 한꺼번에 사용할 수 있게 해줌

export default function Button(props: Buttonprops) {
    const {children, ...rest} = props;

    return (
        <button {...rest}> {children} </button>
    );
}