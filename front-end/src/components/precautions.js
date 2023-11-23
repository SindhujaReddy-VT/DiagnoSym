import React, { useState } from 'react';
import '../css/precautions.css';
import Header from '../components/header';
import Footer from '../components/footer';
import piles from '../images/precautions/piles.jpeg';
import malaria from '../images/precautions/malaria.jpeg';
import typhoid from '../images/precautions/typhoid.jpeg';
import aids from '../images/precautions/aids.png';
import migraine from '../images/precautions/migraine.jpeg';
import chickenpox from '../images/precautions/chicken pox.jpeg';
import varicoseVeins from '../images/precautions/varicose veins.jpeg';
import pepticUlcer from '../images/precautions/pepticUlcer.jpeg';
import hypoglycemia from '../images/precautions/hypoglycemia.png';
import hepatitis from '../images/precautions/heptitis a.png';
import gastroenteritis from '../images/precautions/Gastroenteritis.jpeg';
import hyperthyroidism from '../images/precautions/hyperthyroidism.jpeg';
import arthritis from '../images/precautions/Arthritis.jpeg';
import gerd from '../images/precautions/gerd.jpeg';
import hepatitisB from '../images/precautions/hepatitis b.jpeg';
import hepatitisA from '../images/precautions/hepatitis b.jpeg';
import cholestasis from '../images/precautions/cholestasis.jpeg';
import acne from '../images/precautions/acne.jpeg';

const Precautions = () => {
    const diseases = [
        {
            id: 1,
            name: "Dimorphic hemorrhoids (piles)",
            image: piles,
            description: "Dimorphic hemorrhoids, also known as piles, are swollen blood vessels located in the rectal area. They can cause pain, itching, and bleeding during bowel movements.",
            symptoms: ["Pain during bowel movements", "Itching around the anal area", "Bleeding from the rectum"],
            precautions: [
                "Maintain good hygiene in the anal area",
                "Consume a high-fiber diet to prevent constipation",
                "Stay hydrated and avoid straining during bowel movements",
            ],
        },
        {
            id: 2,
            name: "Malaria",
            image: malaria,
            description: "Malaria is a mosquito-borne infectious disease that can lead to fever, chills, and flu-like symptoms.",
            symptoms: ["Fever", "Chills", "Muscle aches"],
            precautions: [
                "Use mosquito nets and repellents to prevent mosquito bites",
                "Take anti-malarial medication as prescribed",
                "Eliminate standing water where mosquitoes breed",
            ],
        },
        {
            id: 3,
            name: "Typhoid",
            image: typhoid,
            description: "Typhoid fever is a bacterial infection that causes high fever, abdominal pain, and diarrhea.",
            symptoms: ["High fever", "Abdominal pain", "Diarrhea"],
            precautions: [
                "Practice good hygiene, especially with food and water",
                "Get vaccinated against typhoid",
                "Seek medical treatment if you suspect typhoid infection",
            ],
        },
        {
            id: 4,
            name: "Hepatitis D",
            image: hepatitis,
            description: "Hepatitis D is a viral infection that affects the liver and is caused by the hepatitis D virus. It can result in symptoms similar to other forms of hepatitis.",
            symptoms: ["Fatigue", "Jaundice (yellowing of the skin and eyes)", "Abdominal pain"],
            precautions: [
                "Practice safe sex and use clean needles to prevent transmission",
                "Get vaccinated against hepatitis B to reduce the risk of hepatitis D",
                "Avoid excessive alcohol consumption",
            ],
        },
        {
            id: 5,
            name: "AIDS",
            image: aids,
            description: "AIDS (Acquired Immunodeficiency Syndrome) is a late stage of HIV infection that affects the immune system. It can lead to various symptoms and opportunistic infections.",
            symptoms: ["Frequent infections", "Rapid weight loss", "Fatigue"],
            precautions: [
                "Practice safe sex and use clean needles to prevent HIV transmission",
                "Adhere to antiretroviral therapy (ART) as prescribed",
                "Get regular medical check-ups and follow a healthy lifestyle",
            ],
        },
        {
            id: 6,
            name: "Hypertension",
            image: hyperthyroidism,
            description: "Hypertension, or high blood pressure, is a condition where the force of blood against the artery walls is consistently too high, which can lead to various complications.",
            symptoms: ["Headaches", "Shortness of breath", "Chest pain"],
            precautions: [
                "Maintain a healthy diet with low salt and regular exercise",
                "Take prescribed medications as advised by a healthcare provider",
                "Monitor blood pressure regularly and reduce stress",
            ],
        },
        {
            id: 7,
            name: "Migraine",
            image: migraine,
            description: "Migraine is a neurological condition that causes severe headaches often accompanied by other symptoms like nausea and light sensitivity.",
            symptoms: ["Intense headaches", "Nausea", "Sensitivity to light and sound"],
            precautions: [
                "Identify and avoid migraine triggers",
                "Take prescribed medications to manage and prevent migraines",
                "Practice relaxation techniques to reduce stress",
            ],
        },
        {
            id: 8,
            name: "Chicken pox",
            image: chickenpox,
            description: "Chickenpox is a highly contagious viral infection that causes an itchy rash and flu-like symptoms.",
            symptoms: ["Itchy rash", "Fever", "Fatigue"],
            precautions: [
                "Get vaccinated against chickenpox (varicella)",
                "Isolate the infected person to prevent transmission",
                "Keep the rash clean and avoid scratching",
            ],
        },
        {
            id: 9,
            name: "Varicose veins",
            image: varicoseVeins,
            description: "Varicose veins are swollen and twisted veins, often in the legs, that can cause pain and discomfort.",
            symptoms: ["Swollen and twisted veins", "Aching or pain in the legs", "Leg cramps"],
            precautions: [
                "Elevate your legs and wear compression stockings",
                "Stay physically active to improve blood circulation",
                "Consult a healthcare professional for treatment options",
            ],
        },
        {
            id: 10,
            name: "Peptic ulcer disease",
            image: pepticUlcer,
            description: "Peptic ulcer disease involves painful sores that form on the inner lining of the stomach, small intestine, or esophagus.",
            symptoms: ["Burning stomach pain", "Bloating", "Nausea"],
            precautions: [
                "Avoid irritants like spicy foods and NSAIDs",
                "Take prescribed medications to reduce stomach acid",
                "Follow a balanced diet and stress-reduction techniques",
            ],
        },
        {
            id: 11,
            name: "Hypoglycemia",
            image: hypoglycemia,
            description: "Hypoglycemia is a condition characterized by low blood sugar levels, often seen in people with diabetes or other medical conditions.",
            symptoms: ["Sweating", "Trembling", "Confusion"],
            precautions: [
                "Consume regular meals and monitor blood sugar levels",
                "Carry a source of fast-acting glucose (e.g., candy or juice)",
                "Follow a diabetes management plan",
            ],
        },
        {
            id: 12,
            name: "Hepatitis A",
            image: hepatitisA,
            description: "Hepatitis A is a contagious liver infection caused by the hepatitis A virus, leading to jaundice and flu-like symptoms.",
            symptoms: ["Jaundice (yellowing of the skin and eyes)", "Fatigue", "Nausea"],
            precautions: [
                "Get vaccinated against hepatitis A",
                "Practice good hygiene and handwashing",
                "Avoid consuming contaminated food or water",
            ],
        },
        {
            id: 13,
            name: "Gastroenteritis",
            image:gastroenteritis,
            description: "Gastroenteritis is an inflammation of the stomach and intestines, often caused by viral or bacterial infections, resulting in diarrhea and vomiting.",
            symptoms: ["Diarrhea", "Vomiting", "Abdominal cramps"],
            precautions: [
                "Stay hydrated and replace lost fluids",
                "Practice good hygiene to prevent the spread of infection",
                "Consult a healthcare provider if symptoms worsen",
            ],
        },
        {
            id: 14,
            name: "Hyperthyroidism",
            image: hyperthyroidism,
            description: "Hyperthyroidism is a condition where the thyroid gland produces excess thyroid hormones, leading to symptoms like weight loss and rapid heart rate.",
            symptoms: ["Weight loss", "Rapid heartbeat", "Anxiety"],
            precautions: [
                "Consult a healthcare provider for diagnosis and treatment options",
                "Follow prescribed medications or thyroid-suppressing therapy",
                "Monitor thyroid hormone levels regularly",
            ],
        },
        {
            id: 15,
            name: "Arthritis",
            image: arthritis,
            description: "Arthritis refers to inflammation of the joints, leading to pain, swelling, and decreased joint mobility.",
            symptoms: ["Joint pain", "Swelling", "Stiffness"],
            precautions: [
                "Stay physically active with joint-friendly exercises",
                "Use pain relief medications as prescribed",
                "Consider physical therapy for joint mobility",
            ],
        },
        {
            id: 16,
            name: "GERD",
            image: gerd,
            description: "GERD (Gastroesophageal Reflux Disease) is a chronic condition where stomach acid flows back into the esophagus, causing heartburn and irritation.",
            symptoms: ["Heartburn", "Regurgitation", "Chest pain"],
            precautions: [
                "Avoid trigger foods and beverages that worsen symptoms",
                "Elevate the head of your bed to prevent nighttime reflux",
                "Take prescribed medications to reduce acid reflux",
            ],
        },
        {
            id: 17,
            name: "Hepatitis C",
            image: hepatitis,
            description: "Hepatitis C is a viral infection that affects the liver. It can lead to chronic liver disease and various complications.",
            symptoms: ["Fatigue", "Jaundice (yellowing of the skin and eyes)", "Abdominal pain"],
            precautions: [
                "Practice safe sex and use clean needles to prevent transmission",
                "Get tested for hepatitis C and seek treatment if diagnosed",
                "Avoid alcohol and follow a liver-healthy diet",
            ],
        },
        {
            id: 18,
            name: "Hepatitis B",
            image: hepatitisB,
            description: "Hepatitis B is a viral infection that affects the liver and can lead to both acute and chronic liver disease.",
            symptoms: ["Fatigue", "Jaundice (yellowing of the skin and eyes)", "Abdominal pain"],
            precautions: [
                "Get vaccinated against hepatitis B",
                "Practice safe sex and avoid sharing needles",
                "Follow medical treatment if diagnosed with hepatitis B",
            ],
        },
        {
            id: 19,
            name: "Chronic cholestasis",
            image: cholestasis,
            description: "Chronic cholestasis is a condition that impairs the flow of bile from the liver, resulting in bile buildup and liver damage.",
            symptoms: ["Itchy skin", "Dark urine", "Fatigue"],
            precautions: [
                "Consult a healthcare provider for diagnosis and treatment options",
                "Follow prescribed medications to manage symptoms",
                "Consider surgical or other interventions if necessary",
            ],
        },
        {
            id: 20,
            name: "Acne",
            image: acne,
            description: "Acne is a common skin condition that leads to pimples, blackheads, and whiteheads, often affecting the face, chest, and back.",
            symptoms: ["Pimples", "Blackheads", "Whiteheads"],
            precautions: [
                "Maintain good facial hygiene with gentle cleansing",
                "Use over-the-counter or prescribed acne treatments",
                "Avoid picking or squeezing pimples to prevent scarring",
            ],
        },
    ];

    const [selectedDisease, setSelectedDisease] = useState(null);

    const selectDisease = (disease) => {
        setSelectedDisease(disease);
    };

    return (
        <div>
            <Header />
            <h1 className="precautions-heading">Health Precautions for Various Diseases</h1>
            <div className="card-container">
                {diseases.map((disease) => (
                    <div
                        key={disease.id}
                        className={`card ${selectedDisease === disease ? 'flipped' : ''}`}
                        onClick={() => selectDisease(disease)}
                    >
                        <div className="card-inner">
                            <div className="front">
                                <div className="image-container">
                                    <img src={disease.image} alt={disease.name} />
                                </div>
                                <div className="image-title">{disease.name}</div>
                            </div>
                            <div className="back">
                                <h2>{disease.name}</h2>
                                <p>{disease.description}</p>
                                <h3>Precautions:</h3>
                                <ul>
                                    {disease.precautions.map((precaution, index) => (
                                        <li key={index}>{precaution}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Precautions;