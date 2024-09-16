// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA1-UsNJbpG_zY0qYY0l2fDRVVVC_rQTuQ",
            authDomain: "safe-route-tech.firebaseapp.com",
            databaseURL: "https://safe-route-tech.firebaseio.com/",
            projectId: "safe-route-tech",
            storageBucket: "safe-route-tech.appspot.com",
            messagingSenderId: "819049700031",
            appId: "1:819049700031:web:f8a81410a573bf29b8440a",
            measurementId: "G-GGTTVCB57H"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage().ref();
document.addEventListener('DOMContentLoaded', () => {
    const driversList = document.getElementById('drivers-list');

    // Récupérer les données des chauffeurs depuis Firebase Realtime Database
    database.ref('/drowsiness_detection').on('child_added', (snapshot) => {
        const data = snapshot.val();
        const driverDiv = document.createElement('div');
        driverDiv.classList.add('driver');

        // Ajouter les données à la page
        driverDiv.innerHTML = `
            <p><strong>Timestamp:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}</p>
            <p><strong>EAR:</strong> ${data.ear}</p>
            <p><strong>Alarm Triggered:</strong> ${data.alarm_triggered ? 'Yes' : 'No'}</p>
            <img src="${data.image_url}" alt="Image">
        `;

        driversList.appendChild(driverDiv);
    });
});