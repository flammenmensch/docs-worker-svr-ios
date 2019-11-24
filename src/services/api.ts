const URL = 'https://script.google.com/macros/s/AKfycbykkdBuaylDEGqWLpFIqlzhTU8VIgtwY4O0ytRs9OwosZowkcc/exec';

interface SendDataParams {
  action: string;
  stage: string;
  name: string;
  roomNumber: string;
  category: string;
  responsible: string;
  notes: string;
}

export const sendData = (params: { [key: string]: string; }) => {
  const formData = new FormData();

  for (const name in params) {
    if (params.hasOwnProperty(name)) {
      formData.append(name, params[name]);
    }
  }

  return fetch(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: formData
  });
};
