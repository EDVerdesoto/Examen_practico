
function calcWeightedGrade(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('Items debe ser un arreglo');
    }

    let peso_total = 0;
    let nota = 0;
    
    items.forEach((item, idx) => {
        if(typeof item !== 'object' || item === null) {
            throw new TypeError(`El elemento en índice ${idx} no es un objeto`);
        }
        const { score, weight } = item;
        if(typeof score !== 'number' || typeof weight !== 'number') {
            throw new TypeError(`Score y Weight deben ser números en el índice ${idx}`);
        }
        if (score < 0 || score > 100) {
            throw new RangeError(`score fuera de rango (0–100)`);
        }
        if (weight < 0 || weight > 1) {
            throw new RangeError(`weight fuera de rango (0–1) `);
        }
        peso_total += weight;
        nota += score * weight;
    });

    if (Math.abs(peso_total - 1) > 0.001) {
        throw new RangeError('La suma de los pesos debe ser 1');
    }

    return Number(nota.toFixed(2));
}

function percentile(p, values){
    if (typeof p !== 'number' || p < 0 || p > 100) {
        throw new RangeError('Percentil debe estar en [0,100]');
    }
    if (!Array.isArray(values) || values.length === 0) {
        throw new TypeError('Values debe ser un arreglo no vacío');
    }
    values.forEach((v, idx) => {
        if (typeof v !== 'number') {
            throw new TypeError(`El elemento en índice ${idx} no es un número`);
        }
    });
    values.sort((a, b) => a - b);
    const N = values.length;
    const rank = Math.ceil((p / 100) * N);
    if (rank === 0) return Number(values[0].toFixed(2));
    if (rank > N) return Number(values[N - 1].toFixed(2));
    return Number(values[rank - 1].toFixed(2));
}

module.exports = {
    calcWeightedGrade,
    percentile
};