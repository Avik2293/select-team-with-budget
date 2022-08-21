// For Calculate Button. 

document.getElementById('btn-calculate').addEventListener('click', function () {

    // const totalPlayer = getInputFieldValueById('total-income');

    const perPlayer = getInputFieldValueById('per-player');

    if (isNaN(perPlayer)) {
        alert('Please, Provide a valid Number.');
        return;
    }
    else if (perPlayer <= 0) {
        alert('Please, Provide a Positive Number.');
        return;
    }

    const playerTotalExpences = perPlayer * 5;

    setTextElementValueById('players-total-expences', playerTotalExpences);
})


// Total Calculation Button.. 

document.getElementById('btn-total').addEventListener('click', function () {

    const playerTotalExpences = getTextElementValueById('players-total-expences');

    const forManager = getInputFieldValueById('for-manager');

    const forCoach = getInputFieldValueById('for-coach');

    if ((isNaN(forManager)) || (isNaN(forCoach))) {
        alert('Please, Provide a valid Number.');
        return;
    }
    else if ((forManager <= 0) || (forCoach <= 0)) {
        alert('Please, Provide a Positive Number.');
        return;
    }

    const totalExpences = playerTotalExpences + forManager + forCoach;

    setTextElementValueById('total', totalExpences);
})
