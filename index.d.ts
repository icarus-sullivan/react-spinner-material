declare module "react-spinner-material" {
    export interface SpinnerProps {
        size?: number;
        spinnerColor?: string;
        spinnerWidth?: number;
        visible?: boolean;
    }
    export default class Spinner extends React.Component<SpinnerProps, {}> {}
}
