// 异步 SHA256 加密函数
async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// 这里放你生成的哈希值 ↓↓↓
const correctHash = "511c4347c467d422b4459827401e0351141849b1941141849b1941141849b194";

async function checkPwd() {
  const input = document.getElementById("password").value;
  const inputHash = await sha256(input);

  if (inputHash === correctHash) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("密码错误");
  }
}

