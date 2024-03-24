const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			
				},
		actions: {
			// Use getActions to call a function within a fuction
				createContact: (fullName, emailAddress, postalAddress, phoneNumber) => {
					fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						"full_name": fullName,
						"email": emailAddress,
						"agenda_slug": "melodycn",
						"address": postalAddress,
						"phone": phoneNumber,
						})
					})
						.then(response => response.json())
						.then(data => console.log(data))
						.catch(error => console.log('Error: ', error));

				},

				getContact: () => {
					fetch('https://playground.4geeks.com/apis/fake/contact/agenda/melodycn', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						"full_name": fullName,
						"email": emailAddress,
						"agenda_slug": "melodycn",
						"address": postalAddress,
						"phone": phoneNumber,
						})
					})
						.then(response => response.json())
						.then(data => setStore({contacts: data}))
						.catch(error => console.log('Error: ', error));

				},
			
			}

		}
		}

export default getState;
