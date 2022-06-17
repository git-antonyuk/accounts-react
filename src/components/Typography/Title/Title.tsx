import styles from './Title.module.scss';

interface ITitleProps {
    /**
     * Content of title
     */
    text: string,
    /**
     * H1 or H2
     */
    level?: 1 | 2,
    /**
     * Additional styles from parent component 
     */
    className?: string
}

const Title = ({ level = 1, text, className }: ITitleProps) => {
    return (
        <>
            {level === 1 && <h1 className={[styles.h1, className].join(' ')}>{text}</h1>}
            {level === 2 && <h2 className={[styles.h2, className].join(' ')}>{text}</h2>}
        </>
    );
};

export default Title;
