declare module "react-spinner-material" {
    export interface SpinnerProps {
        width?: number;
        height?: number;
        spinnerColor?: string;
        spinnerWidth?: number;
        show?: boolean;
    }
    export default class Spinner extends React.Component<SpinnerProps, {}> {}
}
