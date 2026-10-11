export const experiences = [
	{
		company: 'University of Würzburg',
		time: '2025 - Present',
		title: 'Doctoral Researcher',
		location: 'Würzburg',
		description: '',
	},
	{
		company: 'University of Würzburg',
		time: '2020 - 2025',
		title: 'Student (Research) Assistent',
		location: 'Würzburg',
		description: 'Tutor for several bachelors courses and research assistance',
	},
];

export const education = [
	{
		school: 'University of Würzburg',
		time: '2025 - Present',
		degree: 'Ph.D. in Computer Science',
		location: 'Würzburg',
		description: 'Research on Privacy-Preserving Machine Learning',
	},
	{
		school: 'University of Würzburg',
		time: '2022 - 2025',
		degree: 'Master of Science',
		location: 'Würzburg',
		description: '',
	},
	{
		school: 'University of Würzburg',
		time: '2019 - 2023',
		degree: 'Bachelor of Science',
		location: 'Würzburg',
		description: '',
	},
	{
		school: 'Friedrich-Rüchert Gymnasium',
		time: '2011 - 2019',
		degree: 'A-Levels',
		location: 'Ebern',
		description: '',
	},
];

export const skills = [
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const publications = [
    {
        title: 'Homomorphic Approximation of Non-Linear Activation Functions Using the CKKS Cryptosystem of the OpenFHE Library',
        authors: 'Engel, Simon and Prantl, Thomas and Horn, Lukas and Bonilla, Rafael and Kounev, Samuel',
        journal: 'Discover Artificial Intelligence',
        time: 'aug 2026',
        link: 'https://doi.org/10.1007/s44163-026-01915-8',
        abstract: 'Homomorphic computing can be viewed as the holy grail of encryption, as it allows evaluating computations on encrypted data. This enables perfect privacy for cloud applications, as a cloud provider handling user data never gets to see the data it is performing calculations on. Unfortunately, homomorphic cryptosystems can only evaluate a limited number of mathematical functions. One of the most promising cryptosystems today is the CKKS cryptosystem, which allows the evaluation of encrypted multiplications and additions. An essential part of neural networks and machine learning, however, are activation functions that are purposely built to introduce non-linearity into the neural network and, therefore, can not be evaluated easily using only multiplications and additions. Solving this problem is currently done by evaluating approximation polynomials homomorphically. However, this method is imprecise and often requires modifications to the training process and extensive manual optimization of the network to be feasible. In this article, we propose a novel way of implementing the eight commonly used activation functions Binary-Step, ReLU, parametric ReLU, Sigmoid, Tanh, GELU, ELU and Swish, by building them with the help of the homomorphic square-root, inverse, and exponential evaluation methods proposed by Prantl et al. We conducted an extensive parameter study, helping developers to choose parameters suiting their requirements. Our activation functions mostly outperformed the classical approach of polynomial approximation on smaller evaluation intervals and, for some functions, also for larger intervals in both accuracy and computational efficiency. We found that both the popular ReLU and more recent GELU activation functions were among the most well-suited activation functions for homomorphic evaluation.',
    },
    {
        title: 'Laying the Foundation for Homomorphic Training of Neural Networks',
        authors: 'Horn, Lukas Johannes',
        journal: 'Springer Vieweg Wiesbaden',
        time: '2026',
        link: '',
        abstract: 'As Artificial Intelligence becomes increasingly integrated into modern technology, the tension between data utility and individual privacy intensifies. Privacy-Preserving Machine Learning (PPML) addresses this conflict by utilizing techniques such as Homomorphic Encryption (HE), which enables computation on encrypted data. However, implementing HE in neural networks necessitates the use of functional approximations for complex non-linear operations, introducing errors that may affect model performance. This book investigates the impact of these approximations through a novel simulation framework. By evaluating various network architectures---including Multi-Layer Perceptrons and Convolutional Neural Networks---across multiple datasets, the author analyses the effects of Taylor series, Newton-Raphson, and Chebyshev polynomial approximations, alongside realistic Gaussian noise. The findings reveal that neural networks are inherently resilient to these errors, often maintaining or even improving baseline accuracy. By establishing the necessary precision levels for common activation functions, this work demonstrates the feasibility of efficient homomorphic training, marking a vital advancement for secure and private machine learning.',
    },
    {
        title: 'Classification in the Dark: Performance Insights and Novel Methods for Homomorphic Binary Networks',
        authors: 'Lukas Horn and Lennart Svoboda and Simon Engel and Thomas Prantl and Samuel Kounev',
        journal: 'Wahc 2026',
        time: '2026',
        link: '',
        abstract: '',
    },
    {
        title: 'Cooking in the Dark: Performance Evaluation of Matrix-Vector Operations in Neural Networks under Homomorphic Encryption',
        authors: 'Horn, Lukas and Svoboda, Lennart and Engel, Simon and Prantl, Thomas and Kounev, Samuel',
        journal: 'Ssp 2026',
        time: '2026',
        link: '',
        abstract: '',
    },
    {
        title: 'De Bello Homomorphico: Investigation of the Extensibility of the OpenFHE Library with Basic Mathematical Functions by Means of Common Approaches Using the Example of the CKKS Cryptosystem',
        authors: 'Prantl, Thomas and Horn, Lukas and Engel, Simon and Iffländer, Lukas and Beierlieb, Lukas and Krupitzer, Christian and Bauer, André and Sakarvadia, Mansi and Foster, Ian and Kounev, Samuel',
        journal: 'International Journal of Information Security',
        time: 'apr 2024',
        link: 'https://doi.org/10.1007/s10207-023-00781-0',
        abstract: 'Cloud computing has become increasingly popular due to its scalability, cost-effectiveness, and ability to handle large volumes of data. However, entrusting (sensitive) data to a third party raises concerns about data security and privacy. Homomorphic encryption is one solution that allows users to store and process data in a public cloud without the cloud provider having access to it. Currently, homomorphic encryption libraries only support addition and multiplication; other mathematical functions must be implemented by the user. To this end, we discuss and implement the division, exponential, square root, logarithm, minimum, and maximum function, using the CKKS cryptosystem of the OpenFHE library. To demonstrate that complex applications can be realized with this extended function set, we have used it to homomorphically realize the Box--Cox transform, which is used in many real-world applications, e.g., time-series forecasts. Our results show how the number of iterations required to achieve a given accuracy varies depending on the function. In addition, the execution time for each function is independent of the input and is in the range of ten seconds on a reference machine. With this work, we provide users with insights on how to extend the original restricted function set of the CKKS cryptosystem of the OpenFHE library with basic mathematical functions.',
    },
    {
        title: 'Benchmarking of Secure Group Communication Schemes with Focus on IoT',
        authors: 'Prantl, Thomas and Bauer, André and Engel, Simon and Horn, Lukas and Krupitzer, Christian and Iffländer, Lukas and Kounev, Samuel',
        journal: 'Discover Data',
        time: 'may 2024',
        link: 'https://doi.org/10.1007/s44248-024-00010-6',
        abstract: 'As Internet of Things (IoT) devices become ubiquitous, they face increasing cybersecurity threats. Unlike standard 1-to-1 communication, the unique challenge posed by n-to-n communication in IoT is that messages must not be encrypted for a single recipient but for a group of recipients. For this reason, using Secure Group Communication (SGC) schemes is necessary to encrypt n-to-n communication efficiently for large group sizes. To this end, the literature presents various SGC schemes with varying features, performance profiles, and architectures, making the selection process challenging. A selection from this multitude of SGC schemes should best be made based on a benchmark that provides an overview of the performance of the schemes. Such a benchmark would make it much easier for developers to select an SGC scheme, but such a benchmark still needs to be created. This paper aims to close this gap by presenting a benchmark for SGC schemes that focus on IoT. Since the design of a benchmark first requires the definition of the underlying business problems, we defined suitable problems for using SGC schemes in the IoT sector as the first step. We identified a common problem for the centralized and decentralized/hybrid SGC schemes, whereas the distributed/contributory SGC schemes required defining an independent business problem. Based on these business problems, we first designed a specification-based benchmark, which we then extended to a hybrid benchmark through corresponding implementations. Finally, we deployed our hybrid benchmark in a typical IoT environment and measured and compared the performance of different SGC schemes. Our findings reveal notable impacts on calculation times and storage requirements without a trusted Central Instance (CI) in distributed/contributory SGC schemes.',
    },
    {
        title: 'Towards a Cryptography Encyclopedia: A Survey on Attribute-Based Encryption',
        authors: 'Prantl, Thomas and Zeck, Timo and Horn, Lukas and Ffländer, Lukas and Bauer, André and Dmitrienko, Lexandra and Krupitzer, Christian and Kounev, Samuel',
        journal: 'Journal of Surveillance, Security and Safety',
        time: 'dec 2023',
        link: 'https://doi.org/10.20517/jsss.2023.30',
        abstract: 'Access control, a key feature of digital business models, such as streaming, relies on the implementation of encryption schemes. The diverse use of encryption schemes has led to the development of schemes with a variety of properties. This variety and a lack of comprehensive overview make it difficult for developers to select an appropriate scheme. To bridge this gap, we envision a cryptography encyclopedia. In this survey, we create a sub-encyclopedia for attribute-based encryption (ABE) schemes. More specifically, we provide an overview of relevant features and performance metrics and a taxonomy for ABE schemes. We also perform a performance and feature evaluation of 42 ABE schemes and apply our proposed topology to these approaches. %The content related to Section in the body of this document is not displayed in the PDF. Please confirm the addition of Section numbers or paragraph names.',
    },
    {
        title: 'Oratio Homomorphico: Creating a Lecture for Homomorphic Encryption by Applying Design-Based Research',
        authors: 'Prantl, Thomas and Schneider, Tobias and Horn, Lukas and Engel, Simon and Iffländer, Lukas and Krupitzer, Christian and Bonilla, Rafael and Kounev, Samuel',
        journal: 'Computer Science and Education in Computer Science',
        time: '2027',
        link: 'https://doi.org/10.1007/978-3-032-33123-6_3',
        abstract: '',
    },
    {
        title: 'Performance Analysis of the Homomorphic Implementation of K-Means Using CKKS',
        authors: 'Prantl, Thomas and Amann, Patrick and Horn, Lukas and Engel, Simon and Bauer, André and Bonilla, Rafael and Benhnini, Anwar and Kounev, Samuel',
        journal: 'Discover Applied Sciences',
        time: 'jul 2026',
        link: 'https://doi.org/10.1007/s42452-026-09088-w',
        abstract: 'Modern data science requires large amounts of data and computational power to perform effectively. However, there is a lot of sensitive data that should not be shared with others. To still do data science, methods like Homomorphic Encryption exist that enable calculations on encrypted data. One well-known data science algorithm is K-Means, which clusters data points into a previously fixed number of clusters. We provided a homomorphic implementation by demonstrating how comparisons and assignments of clusters can be calculated. Furthermore, the algorithm is evaluated in an offline approach with bootstrapping and an online approach with client re-encryption. Both achieve an accuracy of 100%, but take significantly longer, ranging from 50,000 to 16 million times compared to the non-encrypted case.',
    },
    {
        title: 'Performance Impact Analysis of Homomorphic Encryption: A Case Study Using Linear Regression as an Example',
        authors: 'Prantl, Thomas and Engel, Simon and Horn, Lukas and Kaiser, Dennis and Iffländer, Lukas and Bauer, André and Krupitzer, Christian and Kounev, Samuel',
        journal: 'Information Security Practice and Experience',
        time: '2023',
        link: 'https://doi.org/10.1007/978-981-99-7032-2_17',
        abstract: '',
    },
    {
        title: 'Towards Performance-Oriented Planning and Development of IoT Applications and Networks',
        authors: 'Prantl, Thomas and Horn, Lukas and Engel, Simon and Meißner, Maximilian and Bonilla, Rafael and Kounev, Samuel',
        journal: 'Companion of the 17th ACM/SPEC International Conference on Performance Engineering',
        time: 'may 2026',
        link: 'https://doi.org/10.1145/3777911.3799728',
        abstract: '',
    },
    {
        title: 'Privacy-Preserving Training and Inference of CNNs: A Medical Performance Case Study',
        authors: 'Prantl, Thomas and Schneider, Louis and Engel, Simon and Horn, Lukas and Borst, Vanessa and Krupitzer, Christian and Kounev, Samuel and Bonilla, Rafael I.',
        journal: '2025 5th Intelligent Cybersecurity Conference (ICSC)',
        time: 'may 2025',
        link: 'https://doi.org/10.1109/ICSC65596.2025.11140461',
        abstract: '',
    },
    {
        title: 'Quo Vadis CKKS: Comparison of the Realization of Basic Mathematical Functions for the Homomorphic Cryptosystem CKKS Using De Bello and Polynomial Approximations',
        authors: 'Prantl, Thomas and Horn, Lukas and Engel, Simon and Bauer, André and Kounev, Samuel',
        journal: 'Journal of Information Security and Applications',
        time: 'sep 2025',
        link: 'https://doi.org/10.1016/j.jisa.2025.104110',
        abstract: '',
    },
    {
        title: 'Security Analysis of a Decentralized, Revocable and Verifiable Attribute-Based Encryption Scheme',
        authors: 'Prantl, Thomas and Lauer, Marco and Horn, Lukas and Engel, Simon and Dingel, David and Bauer, André and Krupitzer, Christian and Kounev, Samuel',
        journal: 'Proceedings of the 19th International Conference on Availability, Reliability and Security',
        time: 'jul 2024',
        link: 'https://doi.org/10.1145/3664476.3664487',
        abstract: '',
    }
];
