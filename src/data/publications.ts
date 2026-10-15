export const publications = [
    {
        "title": "Oratio Homomorphico: Creating a Lecture for Homomorphic Encryption by Applying Design-Based Research",
        "authors": "Thomas Prantl, Tobias Schneider, Lukas Horn, Simon Engel, Lukas Iffländer, Christian Krupitzer, Rafael Bonilla, Samuel Kounev",
        "journal": "Computer Science and Education in Computer Science",
        "time": "2027",
        "link": "https://doi.org/10.1007/978-3-032-33123-6_3",
        "abstract": "The ever-increasing pace of digitalization, with its collection of data and the training of artificial intelligence on this data, is bringing the topic of privacy-preserving computing more and more into focus. One promising technology for implementing the privacy-preserving computing paradigm is homomorphic encryption, which has been driven forward in recent years and still holds great potential for improvement in the future. The training of future computer scientists in this field is therefore of crucial importance in order to put this key technology into practice in the future. However, to the best of the authors’ knowledge, there is currently no course that provides students with insights into the theoretical foundations of homomorphic encryption and teaches the practical applicability and extensibility of existing homomorphic cryptosystems. To close this gap, we present our own lecture in this paper, which focuses on the combination of theory and application of homomorphic encryption. We created our lecture material according to the Design-Based Research principle. We held and evaluated our lecture at three German universities. Our lecture evaluations have shown that we have been able to create suitable lecture material on homomorphic encryption and its application, which we would like to share with other lecturers."
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
        "abstract": "The planning of IoT applications requires consideration of the performance, energy consumption, and security of resource-constrained devices. In particular, n-to-n communication patterns and security mechanisms significantly affect the runtime, energy consumption, and reliability of IoT systems. In this article, we summarize our previous work on the performance and security analysis of secure group communication and attribute-based encryption methods, as well as on the evaluation of publish/subscribe brokers. Based on measurements on real-world IoT hardware, we outline an approach for modeling and combining individual IoT operations to estimate time and energy consumption in advance. The goal is to support developers in performance-oriented planning and development of energy-efficient, secure IoT applications."
    },
    {
        "title": "Privacy-Preserving Training and Inference of CNNs: A Medical Performance Case Study",
        "authors": "Thomas Prantl, Louis Schneider, Simon Engel, Lukas Horn, Vanessa Borst, Christian Krupitzer, Samuel Kounev, Rafael I. Bonilla",
        "journal": "2025 5th Intelligent Cybersecurity Conference (ICSC)",
        "time": "May 2025",
        "link": "https://doi.org/10.1109/ICSC65596.2025.11140461",
        "abstract": "Artificial intelligence is on the rise, with new models and new applications emerging almost every day. However, this often happens at the expense of data privacy. Highly sensitive data is commonly required for applications used in critical areas such as healthcare and finance. One approach to bridging the gap between AI and data privacy is multi-party computation. It enables privacy-preserving machine learning by allowing multiple parties to compute a joint function while keeping their own portion of the dataset private. In this paper, we implement a simple convolutional neural network (CNN) for binary medical X-ray image classification and compare the performance differences between the secure variant with MPC and the classical insecure approach. The results show that the overall classification performance is similar. However, the privacy gained through MPC comes at the cost of three to four orders of magnitude longer runtimes. In addition, careful consideration must be given to choosing the right cryptographic parameters to keep computation within an acceptable time window. Since inference only takes approximately four minutes, using MPC is reasonable considering the large gain in privacy, especially in these sensitive environments."
    },
    {
        "title": "Quo Vadis CKKS: Comparison of the realization of basic mathematical functions for the homomorphic cryptosystem CKKS using De Bello and polynomial approximations",
        "authors": "Thomas Prantl, Lukas Horn, Simon Engel, André Bauer, Samuel Kounev",
        "journal": "Journal of Information Security and Applications",
        "time": "September 2025",
        "link": "https://doi.org/10.1016/j.jisa.2025.104110",
        "abstract": "As data storage and processing increasingly shift to the cloud, the risk of data breaches also rises. One way to address this is using Homomorphic Encryption (HE), which allows for data processing while the data remains encrypted, unlike traditional methods. However, current HE libraries support only addition and multiplication, requiring users to implement other mathematical functions themselves. To this end, we developed and analyzed basic mathematical functions in a previous work. Since polynomial approximations are more common in HE, this paper expands on that by examining and comparing polynomial approximations of these functions with the previously implemented methods. Our findings indicate that while polynomial approximations offer the benefit of low multiplication depth, the previously implemented methods generally outperform them in most scenarios despite their higher computational cost."
    },
    {
        "title": "Security Analysis of a Decentralized, Revocable and Verifiable Attribute-Based Encryption Scheme",
        "authors": "Thomas Prantl, Marco Lauer, Lukas Horn, Simon Engel, David Dingel, André Bauer, Christian Krupitzer, Samuel Kounev",
        "journal": "Proceedings of the 19th International Conference on Availability, Reliability and Security",
        "time": "July 2024",
        "link": "https://doi.org/10.1145/3664476.3664487",
        "abstract": "In recent years, digital services have experienced significant growth, exemplified by platforms like Netflix achieving unprecedented revenue levels. Some of these services employ subscription models, with certain content requiring additional payments or offering third-party products. To ensure the widespread availability of diverse digital services anytime and anywhere, providers must have control over content accessibility. To address the multifaceted challenges in this domain, one promising solution is the adoption of attribute-based encryption (ABE). Over the years, various approaches have been proposed in the literature, offering a wide range of features. In a prior study [18], we assessed the security of one of these proposed approaches and identified one that did not meet its promised security standards. In this research we focuses on conducting a security analysis for another ABE scheme to pinpoint its shortcomings and emphasize the critical importance of evaluating the safety and effectiveness of newly proposed schemes. Specifically, we uncover an attack vector within this ABE scheme, which enables malicious users to decrypt content without the required permissions or attributes. Furthermore, we propose a solution to rectify this identified vulnerability."
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
        "abstract": "In recent years, the trend has increasingly been to store and process data in the cloud. However, this is based on the premise that cloud providers treat the data in a trustworthy manner. One way of using the data in the cloud without the provider having access to it is homomorphic encryption. However, since this encryption has only recently become practicable, analysis of its for practical applications is still in its infancy. Therefore, we investigate the performance of homomorphic encryption using a real-world application, namely linear regression. Our main finding is that although the homomorphic computation of linear regression is in the range of minutes and thus slower than in the non-homomorphic case, linear regression can be computed homomorphic and is therefore suitable for use cases where data security is the top priority."
    }
];