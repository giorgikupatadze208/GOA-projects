const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === 'block';

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach((answer) => {
      answer.style.display = 'none';
    });

    // Toggle current answer
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
