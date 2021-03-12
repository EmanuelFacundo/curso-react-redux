//Action Creator
export function alterarNunMin(novoNum) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNum
    }
}

export function alterarNunMax(novoNum) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNum
    }
}