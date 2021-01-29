var chaineSaisie = "";

function MetAJourChaine(valeur)
    {
        chaineSaisie = valeur;
        document.form.Saisie.value = document.form.Saisie.value + chaineSaisie;
    }

function MetAJourChaineCos()
    {
        document.form.Saisie.value = Math.cos(document.form.Saisie.value);
    }

function MetAJourChaineTan()
    {
        document.form.Saisie.value = Math.tan(document.form.Saisie.value);
    }

function MetAJourChaineSin()
    {
        document.form.Saisie.value = Math.sin(document.form.Saisie.value);
    }
