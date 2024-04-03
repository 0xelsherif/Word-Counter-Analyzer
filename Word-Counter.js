// Function to update word count, letter count, reading time, speaking time, and paragraph count
function updateWordCount() {
  // Get the text from the textarea and remove leading/trailing whitespace
  const inputText = document.getElementById('inputText').value.trim();
  
  // Split the text into words, filter out empty strings, and count the number of words
  const wordCount = inputText.split(/\s+/).filter(word => word !== '').length;
  
  // Count the number of letters (excluding spaces)
  const letterCount = inputText.replace(/\s/g, '').length;
  
  // Count the number of paragraphs based on the number of newline characters
  const paragraphCount = inputText.split('\n').filter(para => para.trim() !== '').length;

  // Calculate reading time based on an average reading speed of 275 words per minute
  const readingTimeMinutes = wordCount / 275;
  const readingTimeSeconds = Math.ceil(readingTimeMinutes * 60);

  // Calculate speaking time based on an average speaking speed of 180 words per minute
  const speakingTimeMinutes = wordCount / 180;
  const speakingTimeSeconds = Math.ceil(speakingTimeMinutes * 60);

  // Format the time as hours, minutes, and seconds
  const formatTime = (minutes, seconds) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") : ""} ${remainingMinutes > 0 ? remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : "") : ""} ${seconds > 0 ? seconds + " second" + (seconds > 1 ? "s" : "") : ""}`;
  };

  // Get the result div
  const resultDiv = document.getElementById('result');
  
  // Update the inner HTML of the result div with the word count, letter count, reading time, speaking time, and paragraph count
  resultDiv.innerHTML = `
    <p>Number of words: ${wordCount}</p>
    <p>Number of letters: ${letterCount}</p>
    <p>Number of paragraphs: ${paragraphCount}</p>
    <p>Reading time: ${formatTime(Math.floor(readingTimeMinutes), readingTimeSeconds)}</p>
    <p>Speaking time: ${formatTime(Math.floor(speakingTimeMinutes), speakingTimeSeconds)}</p>
  `;
}

// Call the updateWordCount function initially
updateWordCount();

// Attach the updateWordCount function to the input event of the textarea
document.getElementById('inputText').addEventListener('input', updateWordCount);