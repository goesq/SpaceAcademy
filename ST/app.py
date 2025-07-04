import streamlit as st
import requests
import datetime

@st.cache_data(ttl=86400)
def gerar_com_huggingface():
    hoje = datetime.date.today().isoformat()
    headers = {
        "Authorization": "Bearer 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"
    }

    payload = {
        "inputs": f"Today is {hoje}. Give me a difficult English word, its meaning, example sentence, and Portuguese translation.",
    }

    response = requests.post(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        headers=headers,
        json=payload
    )

    try:
        data = response.json()
        if isinstance(data, list) and len(data) > 0 and "generated_text" in data[0]:
            return data[0]["generated_text"]
        elif isinstance(data, dict) and "error" in data:
            return f"Erro da API: {data['error']}"
        else:
            return "❌ Resposta inesperada da API."
    except Exception as e:
        return f"❌ Erro ao processar resposta: {e}"

st.title("📚 Word of the Day")
resultado = gerar_com_huggingface()
st.write(resultado)
