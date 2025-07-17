document.getElementById("toggle-mode").addEventListener("click", function() {
     document.body.classList.toggle("dark");
      this.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode"; });
       const images = [ 
        "https://images.unsplash.com/photo-1597172984973-fa1a221fe91d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1703017668166-b929757aa99d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1543218429-ec968b8648da?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        ];
         let imageIndex = 0;
         function showImage() { 
            document.getElementById("carousel-img").src = images[imageIndex];
         }
          function nextImage() { 
            imageIndex = (imageIndex + 1) % images.length;
             showImage(); 
            } 
            function prevImage() { 
                imageIndex = (imageIndex - 1 + images.length) % images.length;
                 showImage(); 
                }
                const quizData = [ 
                    {question: "Which language runs in a web browser?", answers: ["Java", "C", "Python", "JavaScript"], correct: "JavaScript" },
                     {question: "What does CSS stand for?", answers: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Colorful Style Sheets"], correct: "Cascading Style Sheets" }, 
                     {question: "What does HTML stand for?", answers: ["HyperText Markup Language", "Hyper Transfer Mode Language", "Home Tool Markup Language", "HyperTool Main Language"], correct: "HyperText Markup Language" },
                      {question: "What year was JavaScript launched?", answers: ["1996", "1995", "1994", "none"], correct: "1995" }, {question: "Which tag is used for inserting JavaScript into HTML?", answers: ["<script>", "<js>", "<javascript>", "<code>"], correct: "<script>" } 
                    ];
                    let current = 0;
                     let score = 0;
                      let results = []; 
                      function loadQuestion() {
                         const q = quizData[current];
                          document.getElementById("question").innerText = q.question; 
                          const answersDiv = document.getElementById("answers"); 
                          answersDiv.innerHTML = ""; 
                          q.answers.forEach(answer => { 
                            const btn = document.createElement("button"); 
                            btn.innerText = answer;
                             btn.onclick = () => checkAnswer(btn, answer); 
                             answersDiv.appendChild(btn); 
                            }); 
                            }
                            function checkAnswer(button, answer) { 
                                const correct = quizData[current].correct; 
                                document.querySelectorAll("#answers button").forEach(btn => { btn.disabled = true; 
                                    if (btn.innerText === correct) btn.classList.add("correct"); 
                                    else btn.classList.add("wrong");
                                 }); 
                                 results.push({question: quizData[current].question, selected: answer, correct: correct }); 
                                 if (answer === correct) score++; 
                                } 
                                function nextQuestion() { 
                                    current++;
                                     if (current < quizData.length) { 
                                        loadQuestion(); 
                                    } else {
                                        const container = document.getElementById("quiz-container"); 
                                        container.innerHTML = `<h2>🎉 Quiz Complete!</h2><p>You scored ${score}/${quizData.length}</p><ul>${results.map(r => 
                                            `<li><strong>${r.question}</strong><br/>✅ Correct: ${r.correct}<br/>📝 You: ${r.selected}</li>`).join('')}</ul>`;
                                         }
                                         } 
                                         loadQuestion();
                                          async function getJoke() {
                                            const res = await fetch("https://official-joke-api.appspot.com/random_joke"); 
                                            const data = await res.json(); 
                                            document.getElementById("joke").innerHTML = `🤣 <strong>${data.setup}</strong><br />😹 ${data.punchline}`; 
                                        } 
                                        getJoke();
