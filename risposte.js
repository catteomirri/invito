// Gestione centralizzata delle risposte del percorso.
// Tutto resta nel browser di chi apre il sito (localStorage), niente server.

const STORAGE_KEY = 'situationship_risposte';

function getRisposte(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function salvaRisposta(chiave, valore){
  const risposte = getRisposte();
  risposte[chiave] = valore;
  risposte.ultimoAggiornamento = new Date().toISOString();
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(risposte));
  }catch(e){
    // storage pieno o non disponibile: si prosegue comunque senza salvare
    console.warn('Impossibile salvare la risposta', e);
  }
  return risposte;
}
