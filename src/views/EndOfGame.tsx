
export function EndOfGame() {
    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>🎉 Parabéns, Jogador! <br></br> Você venceu o jogo! 🎉</h1>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#2e8b57',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2em',
        color: '#333',
        marginBottom: '30px',
    },
};