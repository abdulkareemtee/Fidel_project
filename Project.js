

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const name_error = document.getElementById('name_error')
const pass = document.getElementById('pass_error')


form.addEventListener('submit',(e)=> {

    var email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name.value === '' || name.value === null ) 

    {
        e.preventDefault();
        name_error.innerHTML = "Name Is Required for Register";
    }
    else {
      name_error.innerHTML = " ";
    }

    if (!email.value,match(email_check))

      {
        e.preventDefault();
        email_error.innerHTML = "Valid Email Required for Register";
      }

      if (password.lalue.length <= 5 )

        {
          e.preventDefault();
          pass_error.innerHTML = "Password Must be more than 6 character";
        }

        if (password.lalue  === 'password'  )

          {
            e.preventDefault();
            pass_error.innerHTML = "Password cannot be password";
          }


          if (password.lalue.length >= 15 )

            {
              e.preventDefault();
              pass_error.innerHTML = "Password cannot  be more than 15 character";
            }


    })