export const publications = [
    {
        "title": "Oratio Homomorphico: Creating a Lecture for Homomorphic Encryption by Applying Design-Based Research",
        "authors": "Thomas Prantl, Tobias Schneider, Lukas Horn, Simon Engel, Lukas Iffländer, Christian Krupitzer, Rafael Bonilla, Samuel Kounev",
        "journal": "Computer Science and Education in Computer Science",
        "time": "2027",
        "link": "https://doi.org/10.1007/978-3-032-33123-6_3",
        "abstract": ""
    },
    {
        "title": "Cooking in the dark: Performance evaluation of matrix-vector operations in neural networks under homomorphic encryption",
        "authors": "Lukas Horn, Lennart Svoboda, Simon Engel, Thomas Prantl, Samuel Kounev",
        "journal": "SSP 2026",
        "time": "November 2026",
        "link": "",
        "abstract": ""
    },
    {
        "title": "Classification in the dark: Performance insights and novel methods for homomorphic binary networks",
        "authors": "Lukas Horn, Lennart Svoboda, Simon Engel, Thomas Prantl, Samuel Kounev",
        "journal": "WAHC 2026",
        "time": "November 2026",
        "link": "",
        "abstract": ""
    },
    {
        "title": "Laying the Foundation for Homomorphic Training of Neural Networks",
        "authors": "Lukas Johannes Horn",
        "journal": "BestMasters",
        "time": "October 2026",
        "link": "",
        "abstract": "As Artificial Intelligence becomes increasingly integrated into modern technology, the tension between data utility and individual privacy intensifies. Privacy-Preserving Machine Learning (PPML) addresses this conflict by utilizing techniques such as Homomorphic Encryption (HE), which enables computation on encrypted data. However, implementing HE in neural networks necessitates the use of functional approximations for complex non-linear operations, introducing errors that may affect model performance. This book investigates the impact of these approximations through a novel simulation framework. By evaluating various network architectures—including Multi-Layer Perceptrons and Convolutional Neural Networks—across multiple datasets, the author analyses the effects of Taylor series, Newton-Raphson, and Chebyshev polynomial approximations, alongside realistic Gaussian noise. The findings reveal that neural networks are inherently resilient to these errors, often maintaining or even improving baseline accuracy. By establishing the necessary precision levels for common activation functions, this work demonstrates the feasibility of efficient homomorphic training, marking a vital advancement for secure and private machine learning."
    },
    {
        "title": "Homomorphic approximation of non-linear activation functions using the CKKS cryptosystem of the OpenFHE library",
        "authors": "Simon Engel, Thomas Prantl, Lukas Horn, Rafael Bonilla, Samuel Kounev",
        "journal": "Discover Artificial Intelligence",
        "time": "August 2026",
        "link": "https://doi.org/10.1007/s44163-026-01915-8",
        "abstract": "Homomorphic computing can be viewed as the holy grail of encryption, as it allows evaluating computations on encrypted data. This enables perfect privacy for cloud applications, as a cloud provider handling user data never gets to see the data it is performing calculations on. Unfortunately, homomorphic cryptosystems can only evaluate a limited number of mathematical functions. One of the most promising cryptosystems today is the CKKS cryptosystem, which allows the evaluation of encrypted multiplications and additions. An essential part of neural networks and machine learning, however, are activation functions that are purposely built to introduce non-linearity into the neural network and, therefore, can not be evaluated easily using only multiplications and additions. Solving this problem is currently done by evaluating approximation polynomials homomorphically. However, this method is imprecise and often requires modifications to the training process and extensive manual optimization of the network to be feasible. In this article, we propose a novel way of implementing the eight commonly used activation functions Binary-Step, ReLU, parametric ReLU, Sigmoid, Tanh, GELU, ELU and Swish, by building them with the help of the homomorphic square-root, inverse, and exponential evaluation methods proposed by Prantl et al. We conducted an extensive parameter study, helping developers to choose parameters suiting their requirements. Our activation functions mostly outperformed the classical approach of polynomial approximation on smaller evaluation intervals and, for some functions, also for larger intervals in both accuracy and computational efficiency. We found that both the popular ReLU and more recent GELU activation functions were among the most well-suited activation functions for homomorphic evaluation."
    },
    {
        "title": "Performance analysis of the homomorphic implementation of K-Means using CKKS",
        "authors": "Thomas Prantl, Patrick Amann, Lukas Horn, Simon Engel, André Bauer, Rafael Bonilla, Anwar Benhnini, Samuel Kounev",
        "journal": "Discover Applied Sciences",
        "time": "July 2026",
        "link": "https://doi.org/10.1007/s42452-026-09088-w",
        "abstract": "Modern data science requires large amounts of data and computational power to perform effectively. However, there is a lot of sensitive data that should not be shared with others. To still do data science, methods like Homomorphic Encryption exist that enable calculations on encrypted data. One well-known data science algorithm is K-Means, which clusters data points into a previously fixed number of clusters. We provided a homomorphic implementation by demonstrating how comparisons and assignments of clusters can be calculated. Furthermore, the algorithm is evaluated in an offline approach with bootstrapping and an online approach with client re-encryption. Both achieve an accuracy of 100\\%, but take significantly longer, ranging from 50,000 to 16 million times compared to the non-encrypted case."
    },
    {
        "title": "Towards Performance-Oriented Planning and Development of IoT Applications and Networks",
        "authors": "Thomas Prantl, Lukas Horn, Simon Engel, Maximilian Meißner, Rafael Bonilla, Samuel Kounev",
        "journal": "Companion of the 17th ACM/SPEC International Conference on Performance Engineering",
        "time": "May 2026",
        "link": "https://doi.org/10.1145/3777911.3799728",
        "abstract": ""
    },
    {
        "title": "Privacy-Preserving Training and Inference of CNNs: A Medical Performance Case Study",
        "authors": "Thomas Prantl, Louis Schneider, Simon Engel, Lukas Horn, Vanessa Borst, Christian Krupitzer, Samuel Kounev, Rafael I. Bonilla",
        "journal": "2025 5th Intelligent Cybersecurity Conference (ICSC)",
        "time": "May 2025",
        "link": "https://doi.org/10.1109/ICSC65596.2025.11140461",
        "abstract": ""
    },
    {
        "title": "Quo Vadis CKKS: Comparison of the realization of basic mathematical functions for the homomorphic cryptosystem CKKS using De Bello and polynomial approximations",
        "authors": "Thomas Prantl, Lukas Horn, Simon Engel, André Bauer, Samuel Kounev",
        "journal": "Journal of Information Security and Applications",
        "time": "September 2025",
        "link": "https://doi.org/10.1016/j.jisa.2025.104110",
        "abstract": ""
    },
    {
        "title": "Security Analysis of a Decentralized, Revocable and Verifiable Attribute-Based Encryption Scheme",
        "authors": "Thomas Prantl, Marco Lauer, Lukas Horn, Simon Engel, David Dingel, André Bauer, Christian Krupitzer, Samuel Kounev",
        "journal": "Proceedings of the 19th International Conference on Availability, Reliability and Security",
        "time": "July 2024",
        "link": "https://doi.org/10.1145/3664476.3664487",
        "abstract": ""
    },
    {
        "title": "Benchmarking of Secure Group Communication schemes with focus on IoT",
        "authors": "Thomas Prantl, André Bauer, Simon Engel, Lukas Horn, Christian Krupitzer, Lukas Iffländer, Samuel Kounev",
        "journal": "Discover Data",
        "time": "May 2024",
        "link": "https://doi.org/10.1007/s44248-024-00010-6",
        "abstract": "As Internet of Things (IoT) devices become ubiquitous, they face increasing cybersecurity threats. Unlike standard 1-to-1 communication, the unique challenge posed by n-to-n communication in IoT is that messages must not be encrypted for a single recipient but for a group of recipients. For this reason, using Secure Group Communication (SGC) schemes is necessary to encrypt n-to-n communication efficiently for large group sizes. To this end, the literature presents various SGC schemes with varying features, performance profiles, and architectures, making the selection process challenging. A selection from this multitude of SGC schemes should best be made based on a benchmark that provides an overview of the performance of the schemes. Such a benchmark would make it much easier for developers to select an SGC scheme, but such a benchmark still needs to be created. This paper aims to close this gap by presenting a benchmark for SGC schemes that focus on IoT. Since the design of a benchmark first requires the definition of the underlying business problems, we defined suitable problems for using SGC schemes in the IoT sector as the first step. We identified a common problem for the centralized and decentralized/hybrid SGC schemes, whereas the distributed/contributory SGC schemes required defining an independent business problem. Based on these business problems, we first designed a specification-based benchmark, which we then extended to a hybrid benchmark through corresponding implementations. Finally, we deployed our hybrid benchmark in a typical IoT environment and measured and compared the performance of different SGC schemes. Our findings reveal notable impacts on calculation times and storage requirements without a trusted Central Instance (CI) in distributed/contributory SGC schemes."
    },
    {
        "title": "De Bello Homomorphico: Investigation of the extensibility of the OpenFHE library with basic mathematical functions by means of common approaches using the example of the CKKS cryptosystem",
        "authors": "Thomas Prantl, Lukas Horn, Simon Engel, Lukas Iffländer, Lukas Beierlieb, Christian Krupitzer, André Bauer, Mansi Sakarvadia, Ian Foster, Samuel Kounev",
        "journal": "International Journal of Information Security",
        "time": "April 2024",
        "link": "https://doi.org/10.1007/s10207-023-00781-0",
        "abstract": "Cloud computing has become increasingly popular due to its scalability, cost-effectiveness, and ability to handle large volumes of data. However, entrusting (sensitive) data to a third party raises concerns about data security and privacy. Homomorphic encryption is one solution that allows users to store and process data in a public cloud without the cloud provider having access to it. Currently, homomorphic encryption libraries only support addition and multiplication; other mathematical functions must be implemented by the user. To this end, we discuss and implement the division, exponential, square root, logarithm, minimum, and maximum function, using the CKKS cryptosystem of the OpenFHE library. To demonstrate that complex applications can be realized with this extended function set, we have used it to homomorphically realize the Box–Cox transform, which is used in many real-world applications, e.g., time-series forecasts. Our results show how the number of iterations required to achieve a given accuracy varies depending on the function. In addition, the execution time for each function is independent of the input and is in the range of ten seconds on a reference machine. With this work, we provide users with insights on how to extend the original restricted function set of the CKKS cryptosystem of the OpenFHE library with basic mathematical functions."
    },
    {
        "title": "Towards a cryptography encyclopedia: a survey on attribute-based encryption",
        "authors": "Thomas Prantl, Timo Zeck, Lukas Horn, Lukas Iffländer, André Bauer, Alexandra Dmitrienko, Christian Krupitzer, Samuel Kounev",
        "journal": "Journal of Surveillance, Security and Safety",
        "time": "December 2023",
        "link": "https://doi.org/10.20517/jsss.2023.30",
        "abstract": "Access control, a key feature of digital business models, such as streaming, relies on the implementation of encryption schemes. The diverse use of encryption schemes has led to the development of schemes with a variety of properties. This variety and a lack of comprehensive overview make it difficult for developers to select an appropriate scheme. To bridge this gap, we envision a cryptography encyclopedia. In this survey, we create a sub-encyclopedia for attribute-based encryption (ABE) schemes. More specifically, we provide an overview of relevant features and performance metrics and a taxonomy for ABE schemes. We also perform a performance and feature evaluation of 42 ABE schemes and apply our proposed topology to these approaches. \\%The content related to Section in the body of this document is not displayed in the PDF. Please confirm the addition of Section numbers or paragraph names."
    },
    {
        "title": "Performance Impact Analysis of Homomorphic Encryption: A Case Study Using Linear Regression as an Example",
        "authors": "Thomas Prantl, Simon Engel, Lukas Horn, Dennis Kaiser, Lukas Iffländer, André Bauer, Christian Krupitzer, Samuel Kounev",
        "journal": "Information Security Practice and Experience",
        "time": "2023",
        "link": "https://doi.org/10.1007/978-981-99-7032-2_17",
        "abstract": ""
    }
];