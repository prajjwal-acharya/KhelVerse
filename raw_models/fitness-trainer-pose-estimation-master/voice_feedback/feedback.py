import pyttsx3

def speak(text):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    engine.say(text)
    engine.runAndWait()

def provide_squat_feedback(knee_angle, back_angle):
    if knee_angle < 90:
        speak("Squat deeper for better form.")
    if back_angle < 160:
        speak("Keep your back straight during the squat.")

def provide_pushup_feedback(elbow_angle, back_angle):
    if elbow_angle > 90:
        speak("Lower your body closer to the ground for a full push-up.")
    if back_angle < 160:
        speak("Keep your back straight during push-ups.")

def provide_hammer_curl_feedback(elbow_angle, wrist_angle):
    if elbow_angle < 45:
        speak("Ensure your elbow is fully extended at the start of the curl.")
    if wrist_angle < 160:
        speak("Keep your wrist straight during the curl for better form.")
